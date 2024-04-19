var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "652",
        "ko": "4348"
    },
    "minResponseTime": {
        "total": "652",
        "ok": "3823",
        "ko": "652"
    },
    "maxResponseTime": {
        "total": "240006",
        "ok": "239911",
        "ko": "240006"
    },
    "meanResponseTime": {
        "total": "224485",
        "ok": "121753",
        "ko": "239890"
    },
    "standardDeviation": {
        "total": "47166",
        "ok": "68907",
        "ko": "5132"
    },
    "percentiles1": {
        "total": "240000",
        "ok": "122015",
        "ko": "240000"
    },
    "percentiles2": {
        "total": "240000",
        "ok": "181876",
        "ko": "240000"
    },
    "percentiles3": {
        "total": "240001",
        "ok": "229136",
        "ko": "240001"
    },
    "percentiles4": {
        "total": "240001",
        "ok": "237412",
        "ko": "240001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 652,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4348,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.706",
        "ok": "1.918",
        "ko": "12.788"
    }
},
contents: {
"req_postrequest--996301393": {
        type: "REQUEST",
        name: "PostRequest",
path: "PostRequest",
pathFormatted: "req_postrequest--996301393",
stats: {
    "name": "PostRequest",
    "numberOfRequests": {
        "total": "5000",
        "ok": "652",
        "ko": "4348"
    },
    "minResponseTime": {
        "total": "652",
        "ok": "3823",
        "ko": "652"
    },
    "maxResponseTime": {
        "total": "240006",
        "ok": "239911",
        "ko": "240006"
    },
    "meanResponseTime": {
        "total": "224485",
        "ok": "121753",
        "ko": "239890"
    },
    "standardDeviation": {
        "total": "47166",
        "ok": "68907",
        "ko": "5132"
    },
    "percentiles1": {
        "total": "240000",
        "ok": "122015",
        "ko": "240000"
    },
    "percentiles2": {
        "total": "240000",
        "ok": "181876",
        "ko": "240000"
    },
    "percentiles3": {
        "total": "240001",
        "ok": "229136",
        "ko": "240001"
    },
    "percentiles4": {
        "total": "240001",
        "ok": "237412",
        "ko": "240001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 652,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4348,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.706",
        "ok": "1.918",
        "ko": "12.788"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
