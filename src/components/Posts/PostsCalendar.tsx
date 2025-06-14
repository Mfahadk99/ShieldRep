import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventClickArg } from '@fullcalendar/core';
import {
  Box,
  Typography,
  Modal,
  useTheme,
  IconButton,
} from '@mui/material';
import { X } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  date: string; // format: "DD/MM/YYYY"
  status: 'published' | 'draft';
  post: string;
}

interface PostsCalendarProps {
  recentPosts: Post[];
}

const PostsCalendar: React.FC<PostsCalendarProps> = ({ recentPosts }) => {
  const theme = useTheme();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Utility to convert DD/MM/YYYY → YYYY-MM-DD
  const formatDateForCalendar = (dateStr: string) => {
    const parts = dateStr.split('/');
    if (parts.length !== 3) return '';
    const [day, month, year] = parts;
    return `${year}-${month?.padStart(2, '0')}-${day?.padStart(2, '0')}`;
  };

  const events = recentPosts.map(post => ({
    id: String(post.id),
    title: post.title,
    date: formatDateForCalendar(post.date),
    extendedProps: {
      status: post.status,
      post: post.post,
    },
    backgroundColor: post.status === 'published' ? theme.palette.success.main : theme.palette.warning.main,
    borderColor: 'transparent',
    textColor: 'white',
  }));

  const handleEventClick = (clickInfo: EventClickArg) => {
    const post = recentPosts.find(p => p.id.toString() === clickInfo.event.id);
    if (post) setSelectedPost(post);
  };

  const handleCloseModal = () => setSelectedPost(null);

  const renderEventContent = (eventInfo: any) => {
    const status = eventInfo.event.extendedProps.status;
    return (
      <Box
        sx={{
          px: 1.5,
          py: 0.5,
          fontSize: '0.75rem',
          borderRadius: 2,
          bgcolor: status === 'published' ? 'success.main' : 'warning.main',
          color: 'white',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxShadow: 1,
        }}
      >
        {eventInfo.event.title}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 4,
        p: 4,
        mt: 4,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h5" gutterBottom>
        📅 Calendar of Posts
      </Typography>

      {/* Legend */}
      <Box display="flex" alignItems="center" gap={3} mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box width={12} height={12} bgcolor="success.main" borderRadius={1} />
          <Typography variant="caption">Published</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Box width={12} height={12} bgcolor="warning.main" borderRadius={1} />
          <Typography variant="caption">Draft</Typography>
        </Box>
      </Box>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        dayMaxEventRows={3}
        views={{
          dayGridMonth: { dayMaxEventRows: 3 },
        }}
      />

      {/* Modal */}
      <Modal open={!!selectedPost} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 400,
            maxWidth: '90%',
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">{selectedPost?.title}</Typography>
            <IconButton size="small" onClick={handleCloseModal}>
              <X />
            </IconButton>
          </Box>
          <Typography variant="body2" color="textSecondary" mb={1}>
            Status: {selectedPost?.status}
          </Typography>
          <Typography variant="body1">{selectedPost?.post}</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default PostsCalendar;
