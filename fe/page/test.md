# 完整调用流程示例
def process_query(self, user_input):
    # 步骤1：解析原始输入
    parsed_query = self.parse_user_query(user_input)
    # 步骤2：构建API请求
    api_response = self.send_api_request(
        prompt=parsed_query["processed_text"],
        context=parsed_query["context"],
        mode="dialog" if parsed_query["needs_dialog"] else "query"
    )
    # 步骤3：后处理
    final_output = self.postprocess_response(api_response)
     return {
        "user_input": user_input,
        "structured_query": parsed_query,
        "raw_response": api_response,
        "final_output": final_output
    }