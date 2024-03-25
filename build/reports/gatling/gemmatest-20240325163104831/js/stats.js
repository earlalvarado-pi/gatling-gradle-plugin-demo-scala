var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1169",
        "ko": "8831"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "3589",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "21532",
        "ok": "21532",
        "ko": "57"
    },
    "meanResponseTime": {
        "total": "1990",
        "ok": "16939",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "5587",
        "ok": "3730",
        "ko": "2"
    },
    "percentiles1": {
        "total": "11",
        "ok": "18359",
        "ko": "10"
    },
    "percentiles2": {
        "total": "12",
        "ok": "18514",
        "ko": "11"
    },
    "percentiles3": {
        "total": "18416",
        "ok": "19579",
        "ko": "14"
    },
    "percentiles4": {
        "total": "19428",
        "ok": "20797",
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
    "count": 1169,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8831,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.034",
        "ok": "9.824",
        "ko": "74.21"
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
        "ok": "1169",
        "ko": "8831"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "3589",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "21532",
        "ok": "21532",
        "ko": "57"
    },
    "meanResponseTime": {
        "total": "1990",
        "ok": "16939",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "5587",
        "ok": "3730",
        "ko": "2"
    },
    "percentiles1": {
        "total": "11",
        "ok": "18359",
        "ko": "10"
    },
    "percentiles2": {
        "total": "12",
        "ok": "18514",
        "ko": "11"
    },
    "percentiles3": {
        "total": "18416",
        "ok": "19579",
        "ko": "14"
    },
    "percentiles4": {
        "total": "19428",
        "ok": "20797",
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
    "count": 1169,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8831,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.034",
        "ok": "9.824",
        "ko": "74.21"
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
