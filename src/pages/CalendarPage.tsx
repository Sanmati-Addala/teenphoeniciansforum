import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { supabase } from '../lib/supabase';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';
import Layout from '../components/layout/Layout';
import 'react-calendar/dist/Calendar.css';

interface Event {
  id: number;
  title: string;
  date: string;
  type: 'ngo' | 'user';
}

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [newEventTitle, setNewEventTitle] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      // Fetch NGO events
      const { data: ngoEvents } = await supabase
        .from('campaign_activities')
        .select('*')
        .eq('status', 'active');

      // Fetch user-specific events
      const { data: userEvents } = await supabase
        .from('user_events')
        .select('*')
        .eq('user_id', supabase.auth.user()?.id);

      const formattedNgoEvents: Event[] = (ngoEvents || []).map((e: any) => ({
        id: e.id,
        title: e.title,
        date: e.date,
        type: 'ngo',
      }));

      const formattedUserEvents: Event[] = (userEvents || []).map((e: any) => ({
        id: e.id,
        title: e.title,
        date: e.date,
        type: 'user',
      }));

      setEvents([...formattedNgoEvents, ...formattedUserEvents]);
    };

    fetchEvents();
  }, []);

  const addEvent = async () => {
    if (!newEventTitle || !selectedDate) return;

    const { data, error } = await supabase
      .from('user_events')
      .insert([
        {
          user_id: supabase.auth.user()?.id,
          title: newEventTitle,
          date: selectedDate.toISOString().split('T')[0],
        },
      ])
      .select();

    if (!error && data) {
      setEvents([...events, { ...data[0], type: 'user' }]);
      setNewEventTitle('');
    }
  };

  const getEventsForDate = (date: Date) =>
    events.filter(
      (e) => new Date(e.date).toDateString() === date.toDateString()
    );

  return (
    <Layout>
      <div className="container-custom py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">My Calendar</h2>

        <Calendar
          tileClassName={({ date }) => {
            const hasEvent = getEventsForDate(date).length > 0;
            return hasEvent ? 'bg-accent-200 rounded-full' : '';
          }}
          onClickDay={(date) => setSelectedDate(date)}
        />

        {selectedDate && (
          <div className="mt-6 max-w-md mx-auto p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              Add Event on{' '}
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </h3>

            {/* Add new user event */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                placeholder="Add your event..."
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <Button onClick={addEvent} className="flex items-center gap-2">
                <Plus size={16} /> Add
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CalendarPage;
