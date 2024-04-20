var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "2353",
        "ko": "2647"
    },
    "minResponseTime": {
        "total": "1703",
        "ok": "1703",
        "ko": "667726"
    },
    "maxResponseTime": {
        "total": "960005",
        "ok": "959440",
        "ko": "960005"
    },
    "meanResponseTime": {
        "total": "696503",
        "ok": "470636",
        "ko": "897283"
    },
    "standardDeviation": {
        "total": "291974",
        "ok": "268795",
        "ko": "105552"
    },
    "percentiles1": {
        "total": "758851",
        "ok": "471415",
        "ko": "960000"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "693971",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960000",
        "ok": "902976",
        "ko": "960001"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "947279",
        "ko": "960001"
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
    "count": 2353,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2647,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.717",
        "ok": "2.22",
        "ko": "2.497"
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
        "ok": "2353",
        "ko": "2647"
    },
    "minResponseTime": {
        "total": "1703",
        "ok": "1703",
        "ko": "667726"
    },
    "maxResponseTime": {
        "total": "960005",
        "ok": "959440",
        "ko": "960005"
    },
    "meanResponseTime": {
        "total": "696503",
        "ok": "470636",
        "ko": "897283"
    },
    "standardDeviation": {
        "total": "291974",
        "ok": "268795",
        "ko": "105552"
    },
    "percentiles1": {
        "total": "758851",
        "ok": "471256",
        "ko": "960000"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "693854",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960000",
        "ok": "902976",
        "ko": "960001"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "947279",
        "ko": "960001"
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
    "count": 2353,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2647,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.717",
        "ok": "2.22",
        "ko": "2.497"
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
