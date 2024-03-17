import React from "react";

export function renderSvg(color = '#D9D9D9') {
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 151 151"
    fill="none"
>
    <path
    fill={color}
    d="M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
    fill={color}
    d="M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
    fill={color}
    d="M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
    fill={color}
    d="M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    /></svg>;
}
