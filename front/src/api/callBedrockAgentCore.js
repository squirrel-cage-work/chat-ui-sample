import { AWS_REGION, AGENTCORE_ARN } from "../config.js";
import { decodeJWT } from "aws-amplify/auth";

export const callBedrockAgentCore = async (jwtToken, inputToken) => {

    const encodedArn = encodeURIComponent(AGENTCORE_ARN);
    const agentCoreUrl = `https://bedrock-agentcore.${AWS_REGION}.amazonaws.com/runtimes/${encodedArn}/invocations?qualifier=DEFAULT`;
    const body = JSON.stringify({ input: { prompt: inputToken } });
    const headers = {
        "Authorization": `Bearer ${jwtToken}`,
        "X-Amzn-Trace-Id": "sample", // ここは修正
        "Content-Type": "application/json",
        "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id": "dfmeoagmreaklgmrkleafremoigrmtesogmtrskhmtkrlshmt", // ここは修正
    };

    const response = await fetch(agentCoreUrl, {
        method: "POST",
        headers,
        body
    });

    if (!response.ok) {
        throw new Error(`failed to request: ${response.status}`);
    }

    return response.json();
};