/**
 * Hot Module Reloading (used when file gets saved it automatically reloads the  page)
 * File Watching Algorithm (written in cpp) keeps the track of all file
 * BUILDING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build Algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking -Removing un-wanted
 * 
 * 
 *  
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key: "h1"
//     },
//     "Heading 1 from parcel"
// );

// // React.createElement => Object => Html(DOM)

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//         key: "h2"
//     },
//     "Heading 2"
// );

//JSX => React.createElement => Object => HTML(DOM) 
// in jsx React.createElement  come from babel (next generation js compiler) which happens behind the scene converts html type code
const heading1 = (
    <h1 id= "title" key = "h1">
        "Namaste ji"
    </h1>
)

//React COMPONENTS
//They are just normal javascript function
// - Functional - NEW - Used oftenly
// - Class Based Component - OLD Way

//1st Functional Component
const HeaderComponent = () => {
    return (
        <div>
            <h1>
                {heading1}
            </h1>
            <h1>
                Helloo First functional Component
            </h1>
            <h2>
                Multiple tags are bounded under parentheseis after return
            </h2>
            <HeaderComponent1 /> // this is known as component composition
        </div>

    )
    //Name of functional component starts with capital letter ->(not mandatory but its goods practice to use )
}
const HeaderComponent1 = () => (
        <div>
            <h1>
                Helloo First functional Component
            </h1>
            <h2>
                Multiple tags are bounded under parentheseis without return both the codes are same
            </h2>
        </div>
    //Name of functional component starts with capital letter ->(not mandatory but its goods practice to use )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<HeaderComponent />); 
 