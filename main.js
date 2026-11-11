const dinput = document.getElementById("domain")
const domainsUrl = "https://raw.githubusercontent.com/StacikM/sophisticated-domain-name-system/refs/heads/main/domains"
const status = document.getElementById("status")

async function navigate() {
    const yes = await getIpFromDomain(dinput.value);

    if (yes != "nono" && yes != "banned") {
        console.log("http://" + yes + "?sdns=" + dinput.value)
        window.location.href = "http://" + yes + "?sdns=" + dinput.value
    }
}

const params = new URLSearchParams(window.location.search);

async function handleRedirect() {
    const value = params.get("goto");
    if (value != undefined) {
        const yes = await getIpFromDomain(value);
        if (await yes == "nono") { location.href = "error.html"; return; }
        else if (await yes == "banned") { location.href = "error.html?banned=true"; return; }
        console.log("param detected");
        window.location.href = "http://" + yes + "?sdns=" + value;
    }
}

handleRedirect();

async function getIpFromDomain(domain) {
    const res = await fetch(domainsUrl + "/" + domain + ".json") // this gotta be the worst code ive wrotten in my whole life
    if (res.status === 404) {
        status.style.color = "red"
        status.textContent = "Doesn't exist"
        return "nono"
    }

    const json = await res.json()
    console.log(json)

    if (json.ip == null) {
        status.style.color = "red"
        status.textContent = "Bad config"
        return "nono"
    }

    if (json.moderated) {
        status.style.color = "red"
        status.textContent = "This domain has been blocked for investigation. Please try again later"
        return "banned"
    }

    return json.ip
}