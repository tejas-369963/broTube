import { useState } from 'react';
import { convertDateToString, convertViews, formatDescription } from '../utils/convertStuff';
import { DateIcon, ViIcon } from '../icons';

const VideoDescription = ({ text}) => {
	const [expanded, setExpanded] = useState(false);

	// Optional truncation for "Show more"
	const MAX_LINES = 3;
	const lines = text.split('\n');
	const displayText = expanded ? text : lines.slice(0, MAX_LINES).join('\n');
	const isTruncated = lines.length > MAX_LINES;

	return (
		<div className=' text-sm'>
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
