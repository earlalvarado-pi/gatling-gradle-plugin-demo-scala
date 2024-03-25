var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "785",
        "ko": "215"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "4141",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "19510",
        "ok": "19510",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "12098",
        "ok": "15409",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "7330",
        "ok": "4180",
        "ko": "3"
    },
    "percentiles1": {
        "total": "16510",
        "ok": "17752",
        "ko": "10"
    },
    "percentiles2": {
        "total": "18120",
        "ok": "18230",
        "ko": "12"
    },
    "percentiles3": {
        "total": "18809",
        "ok": "18916",
        "ko": "17"
    },
    "percentiles4": {
        "total": "19208",
        "ok": "19237",
        "ko": "20"
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
    "count": 785,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 215,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.547",
        "ok": "6.709",
        "ko": "1.838"
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
        "total": "1000",
        "ok": "785",
        "ko": "215"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "4141",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "19510",
        "ok": "19510",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "12098",
        "ok": "15409",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "7330",
        "ok": "4180",
        "ko": "3"
    },
    "percentiles1": {
        "total": "16510",
        "ok": "17752",
        "ko": "10"
    },
    "percentiles2": {
        "total": "18120",
        "ok": "18230",
        "ko": "12"
    },
    "percentiles3": {
        "total": "18809",
        "ok": "18916",
        "ko": "17"
    },
    "percentiles4": {
        "total": "19208",
        "ok": "19237",
        "ko": "20"
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
    "count": 785,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 215,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.547",
        "ok": "6.709",
        "ko": "1.838"
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
