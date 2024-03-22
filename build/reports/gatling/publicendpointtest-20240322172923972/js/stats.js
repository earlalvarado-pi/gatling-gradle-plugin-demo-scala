var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "42",
        "ko": "58"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "282",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "34846",
        "ok": "109",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "29560",
        "ok": "47",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "93",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "96",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "189",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "246",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 42
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 58,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.629",
        "ok": "0.264",
        "ko": "0.365"
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
        "total": "100",
        "ok": "42",
        "ko": "58"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "282",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "34846",
        "ok": "109",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "29560",
        "ok": "47",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "93",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "96",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "189",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "246",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 42
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 58,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.629",
        "ok": "0.264",
        "ko": "0.365"
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
