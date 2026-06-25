const dinput = document.getElementById("domain")
const domainsUrl = "https://raw.githubusercontent.com/StacikM/sophisticated-domain-name-system/domains"
const status = document.getElementById("status")

function navigate() {
    const yes = getIpFromDomain(dinput.value)

    if (yes != "nono") {
        window.location.href = "http://" + yes + "?sdns=" + dinput.value
    }
}

async function getIpFromDomain(domain) {
    const res = await fetch(domainsUrl + "/" + domain + ".json") // this gotta be the worst code ive wrotten in my whole life
    if (res.status === 404) {
        status.style.color = "red"
        status.textContent = "Doesn't exist"
        return "nono"
    }

    const json = res.json()

    if (json.ip == null) {
        status.style.color = "red"
        status.textContent = "Bad config"
        return "nono"
    }
    return json.ip
}