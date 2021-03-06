import React, { useState, useEffect } from 'react';
import Timer from './Timer/Timer';

function TimerState({ play }) {

	// 0 - work, 1 - break; this will decide whether to record it or not
	const [mode, setMode] = useState(1);

	// [workLength, breakLength, ...] ALWAYS the first session is work
	const [sessions, setSessions] = useState([3000, 2000, 3000, 2000]);
	// const [sessions, setSessions] = useState([2000_000, 600_000, 2000_000]);

	// the number to access the current session
	const [sessionNumber, setSessionNumber] = useState(0);

	useEffect(() => {
		sessionNumber%2 === 0 ? setMode(0) : setMode(1);
	}, [sessionNumber])

	const nextSession = () => {
		sessions.length-1 === sessionNumber ? setSessionNumber(0) : setSessionNumber(sessionNumber+1);
		// switchMode()
	}
	const switchMode = () => {
		setMode(mode === 1 ? 0 : 1)
	}
	const resetCurrent = () => {
		setMode(0)
		setSessionNumber(0)
	}

	return(
		<div className='center-container h-full flex items-center justify-center'>
					<Timer
						play={ play }
						mode={ mode }
						sessions={ sessions }
						sessionNumber={ sessionNumber }	
						nextSession={ nextSession }
						switchMode={ switchMode }
						resetCurrent={ resetCurrent }
					/>
		</div>
	);
}

export default TimerState;
