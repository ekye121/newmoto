import { Form, Dropdown } from "react-bootstrap";

function SearchFormGroup({ props, type }) {
	function uppercaseFirstLetter(str) {
		return str.replace(str[0], str[0].toUpperCase());
	}

	const typeStrFix = uppercaseFirstLetter(type);

	return (
		<Form.Group>
			<div className="d-flex justify-content-center">
				<Form.Control
					id={`${type}SearchInput`}
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
					style={{
						borderRadius: "25px",
						paddingRight: "35px",
						paddingLeft: "25px",
						marginRight: "-25px",
						border: "0px transparent",
						fontWeight: "bold",
					}}
					placeholder={`Search ${typeStrFix}...`}
					autoComplete="off"
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
						style={{
							position: "relative",
							borderRadius: "25px",
							border: "0px transparent",
							background: "transparent",
							color: "#212529",
							left: "-10px",
							top: "1px",
							fontSize: "20px",
						}}
					/>
					<Dropdown.Menu
						id={`${type}DropDownMenu`}
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

export default SearchFormGroup;
