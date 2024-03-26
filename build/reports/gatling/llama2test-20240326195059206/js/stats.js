var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "3287",
        "ko": "6713"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "5919",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "8706",
        "ok": "8706",
        "ko": "232"
    },
    "meanResponseTime": {
        "total": "2553",
        "ok": "7745",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "3639",
        "ok": "379",
        "ko": "6"
    },
    "percentiles1": {
        "total": "12",
        "ok": "7809",
        "ko": "11"
    },
    "percentiles2": {
        "total": "7599",
        "ok": "7981",
        "ko": "12"
    },
    "percentiles3": {
        "total": "8044",
        "ok": "8200",
        "ko": "15"
    },
    "percentiles4": {
        "total": "8288",
        "ok": "8396",
        "ko": "21"
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
    "count": 3287,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6713,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.458",
        "ok": "30.72",
        "ko": "62.738"
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
        "total": "10000",
        "ok": "3287",
        "ko": "6713"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "5919",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "8706",
        "ok": "8706",
        "ko": "232"
    },
    "meanResponseTime": {
        "total": "2553",
        "ok": "7745",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "3639",
        "ok": "379",
        "ko": "6"
    },
    "percentiles1": {
        "total": "12",
        "ok": "7809",
        "ko": "11"
    },
    "percentiles2": {
        "total": "7599",
        "ok": "7981",
        "ko": "12"
    },
    "percentiles3": {
        "total": "8044",
        "ok": "8200",
        "ko": "15"
    },
    "percentiles4": {
        "total": "8288",
        "ok": "8396",
        "ko": "21"
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
    "count": 3287,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6713,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.458",
        "ok": "30.72",
        "ko": "62.738"
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
