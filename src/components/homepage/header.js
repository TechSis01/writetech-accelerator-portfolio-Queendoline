import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import "./header.css";

export default function HomepageHeader() {
    const [stableVersion, setStableVersion] = useState();

    useEffect(() => {
        async function fetchData() {
            await fetch("https://api.github.com/repos/amir2mi/flatifycss/releases", {
                method: "GET",
                mode: "cors",
                credentials: "same-origin",
            })
                .then((response) => response.json())
                .then((data) => (data ? setStableVersion(data[0].tag_name.replace("v", "")) : null));
        }
        fetchData();
    }, []);

    return (
        <div className="homepage-header">
            <p className="homepage-title">Hola!</p>
            <h1 className="homepage-subtext">I am Queendoline</h1>
            <p className="homepage-subtitle">
                I’m a Technical Writer & Documentation Engineer, crafting clear, user-friendly documentation that bridges the gap between developers, products, and end-users
            </p>
            <span aria-hidden={true} className="animated-logo"></span>

            <Link to="docs/intro" className={`get-started-button button bordered size-2x style-light`}>
                View my projects
            </Link>
            <a
                href="mailto:queendolineakpan11@gmail.com?subject=Let%20us%20Work%20Together&body=Hi%20[Your%20Name],%0AI%27m%20interested%20in%20working%20with%20you.%20Please%20get%20back%20to%20me."
                className="get-started-button button bordered size-2x style-blue"
            >
                Let's talk
            </a>
            <a
                style={{ display: "block" }}
                href="https://github.com/amir2mi/flatifycss/releases"
                rel="nofollow"
                target="_blank"
                className={`size-sm opacity-60 color-dark`}
            >
                {/* {stableVersion && <span className="anim-fade-in"> Last stable release: {stableVersion}</span>} */}
            </a>
        </div>
    );
}