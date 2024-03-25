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
        "total": "9",
        "ok": "4048",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "19409",
        "ok": "19409",
        "ko": "43"
    },
    "meanResponseTime": {
        "total": "12232",
        "ok": "15579",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "7393",
        "ok": "4185",
        "ko": "3"
    },
    "percentiles1": {
        "total": "16849",
        "ok": "17984",
        "ko": "12"
    },
    "percentiles2": {
        "total": "18266",
        "ok": "18354",
        "ko": "12"
    },
    "percentiles3": {
        "total": "18932",
        "ok": "18983",
        "ko": "15"
    },
    "percentiles4": {
        "total": "19142",
        "ok": "19166",
        "ko": "19"
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
        "total": "8.475",
        "ok": "6.653",
        "ko": "1.822"
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
        "total": "9",
        "ok": "4048",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "19409",
        "ok": "19409",
        "ko": "43"
    },
    "meanResponseTime": {
        "total": "12232",
        "ok": "15579",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "7393",
        "ok": "4185",
        "ko": "3"
    },
    "percentiles1": {
        "total": "16849",
        "ok": "17984",
        "ko": "12"
    },
    "percentiles2": {
        "total": "18266",
        "ok": "18354",
        "ko": "12"
    },
    "percentiles3": {
        "total": "18932",
        "ok": "18983",
        "ko": "15"
    },
    "percentiles4": {
        "total": "19142",
        "ok": "19166",
        "ko": "19"
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
        "total": "8.475",
        "ok": "6.653",
        "ko": "1.822"
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
