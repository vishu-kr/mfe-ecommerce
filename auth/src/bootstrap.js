import React from "react";
import { createRoot } from 'react-dom/client'
import Auth from "./Auth.jsx";

const root = createRoot(document.getElementById('root'))
root.render(
    <Auth />
)