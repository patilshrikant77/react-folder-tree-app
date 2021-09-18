import React, { useState } from "react";
import "./index.css";

const Tree = ({ data = [] }) => {
	return (
		<div className="d-tree">
			<ul className="d-flex d-tree-container flex-column list-style-none">
				{data.map((tree) => (
					<TreeNode node={tree} />
				))}
			</ul>
		</div>
	);
};

const TreeNode = ({ node }) => {
	const [childVisible, setChildVisiblity] = useState(false);

	const hasChild = node.children ? true : false;

	return (
		<li className="d-tree-node border-0 px-1">
			<div
				className="d-flex"
				onClick={(e) => setChildVisiblity((v) => !v)}
			>
				{hasChild && (
					<div
						className={`d-inline d-tree-toggler ${
							childVisible ? "active" : ""
						}`}
					>
						<div class="caret-right"> </div>
					</div>
				)}

				<div className="col d-tree-head">
					<i className={`mx-2 ${node.icon}`}> </i>
					{node.label}
				</div>
			</div>

			{hasChild && childVisible && (
				<div className="d-tree-content">
					<ul className="d-flex d-tree-container flex-column list-style-none">
						<Tree data={node.children} />
					</ul>
				</div>
			)}
		</li>
	);
};

export default Tree;
