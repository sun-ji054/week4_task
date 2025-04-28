// import logo from './logo.svg';
import './App.css';

function App() {
	return(
		<div className='all'>
			<div className='opening'>
				<p className='openingMent'>Welcome<br></br>to my<br></br>PORTFOLIO</p>
				<div className='opening_image' alt='background'></div>
			</div>
			
			<div className='introduce'>
				<p className='title'>"끝없는 호기심으로, 끝없는 집요함으로"</p>
				<div className='text'>
					<p className='wr'>안녕하세요.</p> 
					<p className='wr'>끊임없이 배우고자 하는 프론트엔드 개발자 최선지입니다.</p>
					<p className='wr'>현재 한국외국어대학교에 재학중이며, 과는 social science & ai 융합학부 입니다.</p>
				</div>
			</div>

			<div className='background'>
				<p className='project'>Project</p>

				<Frame/>
				<Frame/>
				<Frame/>

			</div>

			<div className='background2'>
				
				<div className='foot'>
					<a href='https://github.com/sun-ji054' target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					<p>Gmail: seonji04203645@gmail.com</p>
				</div>
				
			</div>
			


		</div>
	)
}

function Frame() {
	return(
		<div className='frame'>
			<p>프로젝트</p>
		</div>
	)
}




export default App;
