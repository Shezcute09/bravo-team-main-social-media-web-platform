import React, { useState } from 'react';

const Comment = ({ avatar, username, timestamp, text }) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    console.log('Reply submitted:', replyText || '(empty)');
    setReplyText('');
    setShowReply(false);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      {/* Comment Header */}
      <div className="flex items-center mb-2">
        <img
          src={avatar || 'https://via.placeholder.com/40'}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{username}</p>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Comment Text */}
      <p className="text-gray-700 mb-3">{text || '(No content)'}</p>

      {/* Reply Button */}
      <button
        onClick={() => setShowReply(!showReply)}
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        {showReply ? 'Cancel' : 'Reply'}
      </button>

      {/* Reply Input */}
      {showReply && (
        <div className="mt-3">
          <textarea
            value={replyText}
            onChange={handleReplyChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Write your reply..."
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleReplySubmit}
              className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
            >
              Submit Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CommentsPage = () => {
  const [comments, setComments] = useState([
    {
      avatar: 'https://via.placeholder.com/40',
      username: 'John Doe',
      timestamp: '2 hours ago',
      text: 'This is a sample comment!',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      username: 'Jane Smith',
      timestamp: '1 day ago',
      text: 'Great post! Thanks for sharing.',
    },
  ]);

  const [newThought, setNewThought] = useState('');

  const handleAddThought = () => {
    const newComment = {
      avatar: 'https://via.placeholder.com/40',
      username: 'You',
      timestamp: 'Just now',
      text: newThought, // This can be empty
    };

    setComments([newComment, ...comments]); // Add the new comment to the top
    setNewThought(''); // Clear input
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Add Thought Section */}
      <div className="p-4 bg-white shadow rounded-lg mb-6">
        <textarea
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="Share your thought (optional)..."
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAddThought}
            className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>

      {/* Existing Comments */}
      {comments.map((comment, index) => (
        <Comment
          key={index}
          avatar={comment.avatar}
          username={comment.username}
          timestamp={comment.timestamp}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default CommentsPage;
