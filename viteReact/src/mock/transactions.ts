export const GET_TRANSACTIONS = {
  "data": {
    "content": [
      {
        "active": true,
        "billingMdn": "string",
        "caller": "string",
        "createdDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "displayName": "string",
        "jobId": "string",
        "modifiedDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "name": "string",
        "priority": 0,
        "serviceId": "string",
        "status": "READY",
        "tags": [
          "string"
        ],
        "totalTargets": 0,
        "transactionId": "string"
      }
    ],
    "empty": true,
    "first": true,
    "last": true,
    "number": 0,
    "numberOfElements": 0,
    "pageable": {
      "offset": 0,
      "pageNumber": 0,
      "pageSize": 0,
      "paged": true,
      "sort": {
        "empty": true,
        "sorted": true,
        "unsorted": true
      },
      "unpaged": true
    },
    "size": 0,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "totalElements": 0,
    "totalPages": 0
  },
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}

export const GET_TRANSACTIONS_DETAIL = {
  "data": {
    "active": true,
    "billingMdn": "string",
    "caller": "string",
    "createdDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "displayName": "string",
    "jobId": "string",
    "modifiedDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "name": "string",
    "priority": 0,
    "serviceId": "string",
    "status": "READY",
    "tags": [
      "string"
    ],
    "totalTargets": 0,
    "transactionId": "string"
  },
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}

export const POST_TRANSACTIONS = {
  "data": {
    "active": true,
    "billingMdn": "string",
    "caller": "string",
    "createdDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "displayName": "string",
    "jobId": "string",
    "modifiedDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "name": "string",
    "priority": 0,
    "serviceId": "string",
    "status": "READY",
    "tags": [
      "string"
    ],
    "totalTargets": 0,
    "transactionId": "string"
  },
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}

export const PATCH_TRANSACTIONS_DETAIL = {
  "data": {
    "active": true,
    "billingMdn": "string",
    "caller": "string",
    "createdDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "displayName": "string",
    "jobId": "string",
    "modifiedDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "name": "string",
    "priority": 0,
    "serviceId": "string",
    "status": "READY",
    "tags": [
      "string"
    ],
    "totalTargets": 0,
    "transactionId": "string"
  },
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}

export const GET_TRANSACTIONS_DETAIL_ACTION = {
  "data": {
    "active": true,
    "billingMdn": "string",
    "caller": "string",
    "createdDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "displayName": "string",
    "jobId": "string",
    "modifiedDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
    "name": "string",
    "priority": 0,
    "serviceId": "string",
    "status": "READY",
    "tags": [
      "string"
    ],
    "totalTargets": 0,
    "transactionId": "string"
  },
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}

export const GET_TRANSACTIONS_DETAIL_TARGETS = {
  "data": {
    "content": [
      {
        "bizUid": "string",
        "callEndDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "callResponseDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "callStartDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "calls": [
          {
            "callId": "string",
            "callee": "string",
            "caller": "string"
          }
        ],
        "createdDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "extParams": {},
        "jobId": "string",
        "modifiedDateTime": "yyyy-MM-dd'T'HH:mm:ss.SSS",
        "serviceId": "string",
        "status": "QUEUED",
        "tags": [
          "string"
        ],
        "taskId": "string",
        "taskInfo": {},
        "teParams": "string",
        "transactionId": "string"
      }
    ],
    "empty": true,
    "first": true,
    "last": true,
    "number": 0,
    "numberOfElements": 0,
    "pageable": {
      "offset": 0,
      "pageNumber": 0,
      "pageSize": 0,
      "paged": true,
      "sort": {
        "empty": true,
        "sorted": true,
        "unsorted": true
      },
      "unpaged": true
    },
    "size": 0,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "totalElements": 0,
    "totalPages": 0
  },
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}

export const GET_TRANSACTIONS_DETAIL_STATS = {
  "data": [
    {
      "jobId": "string",
      "resultStats": {
        "stats": {
          "additionalProp1": {
            "callDuration": 0,
            "count": 0
          },
          "additionalProp2": {
            "callDuration": 0,
            "count": 0
          },
          "additionalProp3": {
            "callDuration": 0,
            "count": 0
          }
        },
        "sumCallDurationInMinutes": 0,
        "totalCount": 0
      },
      "serviceId": "string",
      "targetStats": {
        "stats": {
          "additionalProp1": {
            "callDuration": 0,
            "count": 0
          },
          "additionalProp2": {
            "callDuration": 0,
            "count": 0
          },
          "additionalProp3": {
            "callDuration": 0,
            "count": 0
          }
        },
        "sumCallDurationInMinutes": 0,
        "totalCount": 0
      },
      "transactionId": "string"
    }
  ],
  "header": {
    "isSuccessful": true,
    "resultCode": 0,
    "resultMessage": "string"
  }
}