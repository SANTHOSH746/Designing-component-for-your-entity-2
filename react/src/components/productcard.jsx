// write product card here
// src/cart/productcard.jsx
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="border p-4 rounded-lg shadow-lg w-full max-w-xs text-center bg-white">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAMFBMVEXk5ueutLepsLPZ3N7n6erIzM7P0tTq7O2yuLvBxsje4eLV2NrR1da2u767wMPEycvljgLtAAADY0lEQVR4nO2byXLbMAxAuYDiou3//7akXLfxIosABciZ4bskMz3kDQiBC1ClOp1Op9PpdDqdTqfT6XR+DQDPv1wOeGUHF5dMjG6yX2EGaopaa6Nv5J8hWnWxGaR1vhv9x4ThWrGoX6VuXCcGbleqRGy8xAvSsut0I15hZQ+kcsDmJG41HVoVkuxCwrSfVQ9YSS8Y6qRKvAStxspYZYKcVwrVVlrPUsvoZ4SVNk7GC4b6JdwYRbSOC9YTQSJc/qi4v2AGfi+wyCXUMl8jOlgiWY/OrA1uLYj4Nczh4j7kAMVK64XZCrHt/IQ56YGQ8AUzsWop1L7zg8iaXLTvsOA5tYiplVeR0wocWctyakWiVc55xuTCnbQe4Nx/POZY+gjnp+ipqZXrfNfqWh+1vjTlv7NA0A6BBdZy+qWbT8NWzXuwIec868GGch3bgsV7DKQeIQzvOwTlTl3gvlcT6zxnjS/QSgT79ZV4yeD9DhUt6c3AbaVU+s6HJI/eF1n3w38kdLBE3nTRT7pCL/OwYLykHsAV7oFkYS8OdzBbkGBzRcFYrSXaG65+FRRt3NXGK4j30SF96J/fMItw8/XG0e4oVxkegOnjwIFwWv3wgjW8FzNBZB/cFUvuVcyYebp8ygZsnENW+Wukw+wuyfQXQNlxWMukVHTD+B2DUgXY8N5vP6+2UUXIg0o5WIPbGHK0bMqG132F+boxuvh6+y+TZcs62iQ+kQc+jW6ZjdmtW/mfstuQxMzyH7Ku/sC1jkqgWOR6sM77QXoXtxCZq1jO7oH2ksQ4xQh+3B8FPIzZwjMsCGp8MzOJIbjTxcBPqOvO+4jNZ4tZ4ivgM+HE1whIa3Ok7pjltGNY/TWnSuyUlQRFbhHsec3tAQO7c/5sovWUXz3IicO0DfDSezxHhBYtNqvsRU4waCzrnzHUE397Xf8MKV5Ab2nWQokXY17dwb99wXn7zScvZLioU21IsP081DB1ixdqUrahg4/1wiwh9uW9AcSMpdQSblQPM+K7Ok1Uv9uLWtVmPX3SjsZcFyvRzNK1TVDJz/DGXJNdDcNQREzN1kho+rayHic9OHGrqqQ/6f6MoeKAI/0dFiomcOgz3g1ax/dGmYPWE4eNY/qYXQuHlQsWcwWHBdVegcx/fut0Op1O5xfyBzfiKaWdaPkVAAAAAElFTkSuQmCC" />
      <h2 className="text-lg font-bold mt-2">{productName}</h2>
      <p className="text-gray-700 mt-1">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;