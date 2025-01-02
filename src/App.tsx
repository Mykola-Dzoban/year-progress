import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import beaver from './assets/beaver.svg';
import github from './assets/github.svg';
import logo from './assets/logo.svg';

dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

const daysInYear = () => (dayjs().isLeapYear() ? 366 : 365);

function App() {
	const currentDay = dayjs().dayOfYear();
	const totalDays = daysInYear();
	const progressWidth = (currentDay / totalDays) * 100;

	return (
		<div className="flex flex-col items-center justify-center h-svh">
			<div className="flex flex-col justify-self-center items-center justify-center">
				<img src={logo} className="mb-4" alt="logo" />
				<p className="font-bold text-cyan-900 text-xl">{dayjs().year()} Year Progress</p>
				<p className="text-slate-600">Today is {dayjs().format('DD.MM.YYYY')}</p>
				<p className="font-medium">
					{dayjs().dayOfYear()}/{daysInYear()}
				</p>
				<p className="font-medium">
					{(dayjs().dayOfYear() / daysInYear()).toFixed(7)}% - {dayjs().year()}
				</p>
				<div className="mt-4 flex items-center h-10 w-80 rounded-lg border-4 border-cyan-600 overflow-hidden bg-gray-200">
					<div
						className="h-full "
						style={{
							width: `${progressWidth}%`,
							backgroundColor: '#001247',
						}}
					/>
					<div
						className="h-full flex-grow"
						style={{
							width: `${100 - progressWidth}%`,
							backgroundColor: '#adebff',
						}}
					/>
				</div>
			</div>
			<div className="fixed bottom-4 right-4 flex items-center gap-3">
				<a href="https://quirksymbols.web.app/" target="_blank" rel="noreferrer">
					<img src={beaver} alt="Beaver" className="" />
				</a>
				<a href="https://github.com/Mykola-Dzoban/year-progress" target="_blank" rel="noreferrer">
					<img src={github} alt="Github" />
				</a>
			</div>
		</div>
	);
}

export default App;
