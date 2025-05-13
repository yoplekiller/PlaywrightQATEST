import type { FullResult, Reporter } from '@playwright/test/reporter';
import axios from 'axios';
import 'dotenv/config';



class SlackReporter implements Reporter {
  async onEnd(result: FullResult): Promise<void> {
    try {
      const status = result.status;
      const webhookUrl = process.env.SLACK_TS;

      const payload = {
        // 🔧 여기를 백틱(`)으로 바꿨음
        text: `🎯 *Playwright 테스트 결과*\n상태: *${status.toUpperCase()}*`,
      };

      await axios.post(webhookUrl!, payload,{
        headers: {
          'Content-Type': 'application/json',
        },  
      });
      console.log("📡 webhookUrl 값 확인:", webhookUrl);
      console.log('✅ Slack 메시지 전송 완료!');
    } catch (error) {
      console.error('❌ Slack 메시지 전송 실패:', error);
    }
  }
}

export default SlackReporter;
