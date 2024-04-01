import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Row from "./ui/Row"
const App = () => {
	return (
		<>
			<GlobalStyles />
			<Row type="horizontal">
				<Heading as="h1">Заголовок h3</Heading>
				<Heading as="h2">Заголовок h3</Heading>
				<Heading as="h3">Заголовок h3</Heading>
			</Row>

			<Row type="vertical">
				<Button size="small" variation="primary">
					Маленькая кнопка
				</Button>
				<Button size="large" variation="secondary">
					Большая вторичная кнопка
				</Button>
				<Button size="medium" variation="danger">
					Опасная средняя кнопка
				</Button>
			</Row>
		</>
	)
}

export default App
