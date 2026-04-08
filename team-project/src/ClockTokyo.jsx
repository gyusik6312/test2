function ClockTokyo() {
    return(
        <h1>
            Seoul Time: {" "}
            {new Date().toLocaleDateString("ja-JP", {
                timeZone: "asia/Tokyo"
            })}
        </h1>
    );
}

export default ClockTokyo;