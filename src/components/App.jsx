import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function newEntry(noteInfo) {
    return ( <Note 
        key={noteInfo.key}
        title={noteInfo.title}
        content={noteInfo.content}
    />
    );
}


function App() {
    return (
        <div>
            <Header />
            {notes.map(newEntry)}
            <Footer />
        </div>
    );
}

export default App;