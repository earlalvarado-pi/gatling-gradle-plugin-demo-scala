var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "3243",
        "ko": "1757"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "4846",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "8484",
        "ok": "8484",
        "ko": "44"
    },
    "meanResponseTime": {
        "total": "4888",
        "ok": "7532",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "3609",
        "ok": "445",
        "ko": "2"
    },
    "percentiles1": {
        "total": "7308",
        "ok": "7573",
        "ko": "9"
    },
    "percentiles2": {
        "total": "7678",
        "ok": "7812",
        "ko": "10"
    },
    "percentiles3": {
        "total": "7998",
        "ok": "8164",
        "ko": "13"
    },
    "percentiles4": {
        "total": "8319",
        "ok": "8343",
        "ko": "15"
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
    "count": 3243,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1757,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.17",
        "ok": "30.594",
        "ko": "16.575"
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
        "ok": "3243",
        "ko": "1757"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "4846",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "8484",
        "ok": "8484",
        "ko": "44"
    },
    "meanResponseTime": {
        "total": "4888",
        "ok": "7532",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "3609",
        "ok": "445",
        "ko": "2"
    },
    "percentiles1": {
        "total": "7308",
        "ok": "7573",
        "ko": "9"
    },
    "percentiles2": {
        "total": "7678",
        "ok": "7812",
        "ko": "10"
    },
    "percentiles3": {
        "total": "7998",
        "ok": "8164",
        "ko": "13"
    },
    "percentiles4": {
        "total": "8319",
        "ok": "8343",
        "ko": "15"
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
    "count": 3243,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1757,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.17",
        "ok": "30.594",
        "ko": "16.575"
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
