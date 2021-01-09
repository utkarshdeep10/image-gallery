import * as React from "react";

interface ISearchBar {
    onSubmit: (text: string) => void;
    placeholder?: string;
}

const SearchBar = ({ onSubmit, placeholder }: ISearchBar) => {
    const [text, setText] = React.useState("");
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value);
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onSubmit(text);
    };
    return (
        <>
            <div className="input-container">
                <input
                    className="input"
                    type="text"
                    onChange={onChangeHandler}
                    value={text}
                    onKeyDown={onKeyDownHandler}
                    placeholder={placeholder}
                />
            </div>
            <div className="btn-container">
                <button className="button" onClick={() => onSubmit(text)}>
                    Submit
                </button>
            </div>
        </>
    );
};

export default SearchBar;
