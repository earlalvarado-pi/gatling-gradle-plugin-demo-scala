var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "781",
        "ko": "219"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "4818",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "19610",
        "ok": "19610",
        "ko": "20"
    },
    "meanResponseTime": {
        "total": "12251",
        "ok": "15683",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "7473",
        "ok": "4208",
        "ko": "2"
    },
    "percentiles1": {
        "total": "16793",
        "ok": "18095",
        "ko": "10"
    },
    "percentiles2": {
        "total": "18370",
        "ok": "18471",
        "ko": "12"
    },
    "percentiles3": {
        "total": "19008",
        "ok": "19047",
        "ko": "14"
    },
    "percentiles4": {
        "total": "19309",
        "ok": "19371",
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
    "count": 781,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 219,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.403",
        "ok": "6.563",
        "ko": "1.84"
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
        "ok": "781",
        "ko": "219"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "4818",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "19610",
        "ok": "19610",
        "ko": "20"
    },
    "meanResponseTime": {
        "total": "12251",
        "ok": "15683",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "7473",
        "ok": "4208",
        "ko": "2"
    },
    "percentiles1": {
        "total": "16793",
        "ok": "18095",
        "ko": "10"
    },
    "percentiles2": {
        "total": "18370",
        "ok": "18471",
        "ko": "12"
    },
    "percentiles3": {
        "total": "19008",
        "ok": "19047",
        "ko": "14"
    },
    "percentiles4": {
        "total": "19309",
        "ok": "19371",
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
    "count": 781,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 219,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.403",
        "ok": "6.563",
        "ko": "1.84"
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
