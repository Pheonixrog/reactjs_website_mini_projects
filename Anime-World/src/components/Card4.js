import React from "react";

export default function Card4() {
  const containeStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  // Function to handle image download
  const handleDownload = (imageUrl) => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = imageUrl; // Set the URL to the image
    link.download = "image.jpg"; // Set the filename for download
    link.click(); // Simulate a click to trigger the download
  };

  return (
    <>
      <div style={containeStyle}>
        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>

        <div
          className="card my-4 border border-info w-10 p-2  "
          style={{ width: "21rem", margin: "25px" }}
        >
          <img
            src="https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">One-Piece</h5>
            <button
              onClick={() =>
                handleDownload(
                  "https://imgs.search.brave.com/aO9zlNKnggcAxozPeQj6_etKO8yiiclo5mrLNaJ-9mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1waWN0dXJl/LWIzYmt0OTF2NnA0/dmo1eHEuanBn"
                )
              }
              className="btn btn-primary"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
