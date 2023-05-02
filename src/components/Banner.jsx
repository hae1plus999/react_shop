import React from "react";

export default function Banner() {
    return (
        <section className="h-[40rem] bg-yellow-900 relative">
            <div className="w-full h-full bg-cover bg-banner"/>
            <div className="absolute w-full top-4 text-center text-white">
                <h2 className="text-6xl font-bold">iPhone 14 Pro</h2>
                <p className="text-2xl">프로 그 이상.</p>
            </div>
        </section>
    )
}