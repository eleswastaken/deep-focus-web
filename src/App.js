import React, { useState, useEffect } from 'react';
import Timer from './Components/Timer/Timer';

function App() {

	// 0 - work, 1 - break; this will decide whether to record it or not
	const [mode, setMode] = useState(1);
	// [workLength, breakLength, ...] ALWAYS the first session is work
	const [sessions, setSessions] = useState([10000, 5000, 10000, 3000]);
	// the number to access the current session
	const [sessionNumber, setSessionNumber] = useState(0);

	useEffect(() => {
		sessionNumber%2 == 0 ? setMode(0) : setMode(1);
	}, [sessionNumber])

	const nextSession = () => {
		sessions.length-1 === sessionNumber ? setSessionNumber(0) : setSessionNumber(sessionNumber+1);
		// switchMode()
	}
	const switchMode = () => {
		setMode(mode === 1 ? 0 : 1)
	}

	return (
		<div className="App">
			<p>Mode: { mode }</p>
			<p>Session: { sessionNumber }</p>
			<Timer
				mode={ mode }
				sessions={ sessions }
				sessionNumber={ sessionNumber }	
				nextSession={ nextSession }
				switchMode={ switchMode }

			/>
		</div>
	);
}

export default App;
