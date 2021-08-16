export const formatJSONResponse = (response) => {
    return {
        statusCode: 200,
        body: JSON.stringify(response.message)
    };
};
//# sourceMappingURL=apiGateway.js.map