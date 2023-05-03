const Welcome = () => {
	return <h1>Hello</h1>;
};

const root = ReactDOM.createRoot(document.querySelector("#root")).render(
	React.createElement(Welcome)
);
