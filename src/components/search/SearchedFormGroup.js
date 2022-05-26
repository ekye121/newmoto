import { Form, Dropdown } from "react-bootstrap";

function FormGroup({ props, type }) {
	function uppercaseFirstLetter(str) {
		return str.replace(str[0], str[0].toUpperCase());
	}

	const typeStrFix = uppercaseFirstLetter(type);

	return (
		<Form.Group>
			<Form.Label>{typeStrFix}:</Form.Label>
			<div className="d-flex justify-content-center">
				<Form.Control
					className="form-toggle"
					value={props[`${type}Text`]}
					onChange={props[`${type}InputOnChange`]}
					onClick={(e) => props.dropDownMenu(e, type)}
					required
					disabled={
						type === "model"
							? props.disableModelDropDown
							: props.disableMakeDropDown
					}
				/>
				<Dropdown align="end" show={props[`${type}DropDownMenu`]}>
					<Dropdown.Toggle
						split
						variant="primary"
						onClick={(e) => props.dropDownClickHandler(e, type)}
						className="form-toggle"
						disabled={
							type === "model"
								? props.disableModelDropDown
								: props.disableMakeDropDown
						}
					/>
					<Dropdown.Menu
						variant="dark"
						style={{
							overflow: "scroll",
							maxHeight: "30vh",
							minWidth: "295px",
							maxWidth: "100vw",
						}}
						show={
							type === "model"
								? props.modelDropDownMenu
								: props.makeDropDownMenu
						}
					>
						{props[`${type}sFiltered`].map((make) => {
							return (
								<Dropdown.Item
									className="form-toggle"
									disabled={
										type === "model"
											? props.disableModelItem
											: props.disableMakeItem
									}
									key={make.id}
									onClick={(e) => props.dropDownItemClickHandler(e, type)}
								>
									{make.name}
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</Form.Group>
	);
}

export default FormGroup;
