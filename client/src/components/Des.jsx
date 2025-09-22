import { useState } from 'react';
import { convertDateToString, convertViews } from '../utils/convertStuff';
import { DateIcon, ViIcon } from '../icons';

function formatDescription(text) {
  const noBold = text.replace(/\*\*(.*?)\*\*/g, '$1');

  // 2. Linkify URLs
  const linked = noBold.replace(/(https?:\/\/[^\s]+)/g, url => {
	const safeURL = url.replace(/"/g, '&quot;'); // avoid XSS
	return `<a href="${safeURL}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // 3. Convert newlines to <br>
  return linked.replace(/\n/g, '<br/>');
}


const VideoDescription = ({ text, views, date }) => {
  const [expanded, setExpanded] = useState(false);

  // Optional truncation for "Show more"
  const MAX_LINES = 3;
  const lines = text.split('\n');
  const displayText = expanded ? text : lines.slice(0, MAX_LINES).join('\n');
  const isTruncated = lines.length > MAX_LINES;

  return (
	<div className=' text-sm'>
	  <div className='flex gap-3 pb-3'>
		<div className='flex items-center gap-1'>
		  <ViIcon fill='var(--highlight)' />
		  <span className=' text-[var(--text-muted)]'>{`${convertViews(views)}`}</span>
		</div>
		<div className='flex items-center gap-1'>
		  <DateIcon fill='var(--highlight)' />
		  <span className=' text-[var(--text-muted)]'>{`${convertDateToString(date)}`}</span>
		</div>
	  </div>
	  <div
		className="whitespace-pre-line"
		style={{ color: "var(--text)" }}
		dangerouslySetInnerHTML={{ __html: formatDescription(displayText) }}
	  />
	  {isTruncated && (
		<button
		  className="mt-2 hover:underline"
		  style={{ color: "var(--primary)" }}
		  onClick={() => setExpanded(prev => !prev)}
		>
		  {expanded ? 'Show less' : 'Show more'}
		</button>
	  )}
	</div>
  );
};

export default VideoDescription;
