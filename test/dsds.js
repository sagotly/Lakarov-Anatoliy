/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
const { text } = require('body-parser');
const OpenAI =  require('openai');
// eslint-disable-next-line no-undef
const openai = new OpenAI({apiKey: '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'});
async function t() {

	const prompt = 'напиши короткий вывод для презентации о тексте ниже который подводит итоги и красиво завершает презентацию, стиль текста должен быть нейтральным\n';
	const receivedData = '"Однажды, в захватывающем мире программирования, где языки Go и JavaScript были главными героями цифровой вселенной, жил страстный кодер. Наш герой, вооруженный клавиатурой и неутолимым жаждой знаний, отправился в путешествие сквозь просторы и сложные пейзажи кода.\n\nВ земле Go синтаксис был таким чистым и четким, как горный воздух, и разработчик ощущал силу, осваивая эффективность и параллелизм этого языка. Он танцевал с горутинами и каналами, создавая элегантные решения сложных задач. Избранный фреймворк, Gin, был как верный союзник, помогая нашему герою строить надежные и производительные веб-приложения.\n\nКогда солнце скрылось за горизонтом кодового пейзажа, наш герой почувствовал себя притянутым к волшебному миру JavaScript. Здесь, в этом динамичном царстве, возможности казались бесконечными. TypeScript был выбран как надежный спутник, помогая нашему герою создавать четкий и структурированный код.\n\nПо мере того, как наш кодер путешествовал по просторам кода, он встречал вызовы и задачи, разгадывая их с удовольствием. Его код становился историей, рассказывающей о приключениях в мире программирования, о взлетах и падениях, об исследованиях и открытиях.\n\nИ так, каждая строка кода на его пути была словом в этой захватывающей истории, в которой герой и его языки программирования становились неотъемлемой частью увлекательного научно-фантастического эпоса."';
	const TitleCompletion = await openai.chat.completions.create({
		messages: [
			{ role: 'system', content: prompt + receivedData },
		],
		model: 'gpt-4',
	});
	const conclusion = TitleCompletion.choices[0].message.content;
	const conclusionSlide = {
		title: 'висновок',
		layout: 3,
		text: conclusion
	};
}
async function r(){
	let u = await t();
	console.log(u + '\n\n\n\n');
}
r();

console.log('      ▼￣＞-――-＜￣▼\n 　　  Ｙ　　　　 Ｙ \n　  /　/　๑⚈ ․̫ ⚈๑)\n 　＼ ｜　 つ　　ヽつ');