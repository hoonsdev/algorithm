import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[] build;
    static int[] dp;
    static int[] inDeg;
    static ArrayList<Integer>[] graph;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        for (int t = 0; t < T; t++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            int K = Integer.parseInt(st.nextToken());

            build = new int[N + 1];
            dp = new int[N + 1];
            inDeg = new int[N + 1];
            graph = new ArrayList[N + 1];

            for (int i = 1; i <= N; i++) {
                graph[i] = new ArrayList<>();
            }

            StringTokenizer buildTokens = new StringTokenizer(br.readLine());
            for (int i = 1; i <= N; i++) {
                build[i] = Integer.parseInt(buildTokens.nextToken());
                dp[i] = build[i];
            }

            for (int i = 0; i < K; i++) {
                st = new StringTokenizer(br.readLine());
                int s = Integer.parseInt(st.nextToken());
                int e = Integer.parseInt(st.nextToken());

                inDeg[e]++;
                graph[s].add(e);
            }

            int W = Integer.parseInt(br.readLine());
            int answer = topologySort(W);

            System.out.println(answer);
        }
    }

    static int topologySort(int target) {
        Queue<Integer> queue = new LinkedList<>();

        for (int i = 1; i < inDeg.length; i++) {
            if (inDeg[i] == 0) {
                queue.add(i);
            }
        }

        while (!queue.isEmpty()) {
            int cur = queue.poll();

            if (cur == target) {
                return dp[target];
            }

            for (int next : graph[cur]) {
                if (dp[next] < dp[cur] + build[next]) {
                    dp[next] = dp[cur] + build[next];
                }

                inDeg[next]--;

                if (inDeg[next] == 0) {
                    queue.add(next);
                }
            }
        }

        return 0;
    }
}
