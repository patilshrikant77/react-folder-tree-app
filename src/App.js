// import logo from "./logo.svg";
import "./App.css";
import Tree from "./Tree.js";
import { treeData } from "./data.js";

function App() {
	return (
		<div className="row">
			<div className="col text-center">
				<h2>Folders</h2>
				<p className="mt-3">
					<div className="row mt-3 d-flex justify-content-center">
						<div className="col-auto text-left text-dark">
							<Tree data={treeData} />
						</div>
					</div>
				</p>
			</div>
		</div>
	);
}

export default App;
