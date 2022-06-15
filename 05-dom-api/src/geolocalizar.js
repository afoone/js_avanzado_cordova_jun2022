export const geolocalizar = () => {
    navigator.geolocation.getCurrentPosition(
        position => console.log(position)
    )
}