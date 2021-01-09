import * as React from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import "./scss/main.scss";
import hearts from "./hearts.svg";
import { getImages } from "./utils/apiconfig";
import { IImageList } from "./utils/types";

const App: React.FC = () => {
    const [ImageList, setImageList] = React.useState<Array<IImageList>>([]);
    const onSubmitHandler = async (text: string | undefined) => {
        if (typeof text === "string") {
            const data = await getImages(text);
            setImageList(data);
        }
    };
    return (
        <div className="main">
            <div className="title">Image Search</div>
            <div className="searchbar-container">
                <SearchBar
                    onSubmit={onSubmitHandler}
                    placeholder="Enter something..."
                />
            </div>
            {ImageList.length > 0 ? (
                <>
                    <div className="gallery-container">
                        <Gallery images={ImageList} />
                    </div>
                    <div className="clear">
                        <button>Clear</button>
                    </div>
                </>
            ) : (
                <img src={hearts} alt="loader" className="hearts" />
            )}
        </div>
    );
};

export default App;
