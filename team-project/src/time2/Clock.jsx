function ClockSeoul() {
    return(
        <h1>
            Seoul Time: {" "}
            {new Date().toLocaleDateString("ko-KR", {
                timeZone: "asia/Seoul",
            })}
        </h1>
    );
}

export default ClockSeoul;