# デプロイ手順書 (GitHub & Vercel)

このアプリケーションをGitHubにアップロードし、Vercelで公開するまでの手順です。

## 1. プロジェクトの準備確認
以下の設定が含まれていることを確認済みです（変更不要です）。
- `package.json`: ビルドコマンド (`npm run build`) が設定されています。
- `.gitignore`: `node_modules` など不要なファイルが除外されています。
- `vite.config.js`: Vercelでの動作に適した標準設定です。

## 2. GitHubへのアップロード

ターミナル（PowerShellなど）で以下のコマンドを順番に実行してください。

### Gitの初期化とコミット
```powershell
# Gitリポジトリの初期化
git init

# 全ファイルをステージング
git add .

# コミット（変更の保存）
git commit -m "Initial commit: 解説クリエーターアプリ完成版"
```

### GitHubリポジトリの作成とプッシュ
1. ブラウザで [GitHub](https://github.com/new) にアクセスし、新しいリポジトリを作成します。
   - **Repository name**: `reading-lab` (例)
   - **Public/Private**: どちらでも構いません。
   - "Initialize this repository with..." の項目は**何もチェックしないで**ください。
   - "Create repository" をクリック。

2. 作成後の画面に表示されるコマンドを使ってプッシュします。
   ```powershell
   # 下記のURLは実際のあなたのリポジトリURLに書き換えてください
   git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
   
   git branch -M main
   git push -u origin main
   ```

## 3. Vercelへのデプロイ

1. [Vercel](https://vercel.com/) にアクセスし、ログインします（GitHubアカウントでログインするとスムーズです）。
2. ダッシュボードの "**Add New ...**" から "**Project**" を選択します。
3. "**Import Git Repository**" のリストから、先ほど作成した GitHubリポジトリ (`reading-lab`) を探し、"**Import**" をクリックします。
4. **Configure Project** 画面が表示されます。
   - **Framework Preset**: `Vite` が自動選択されているはずです。
   - **Root Directory**: `./` (そのままでOK)
   - **Build Command**: `npm run build` または `vite build` (そのままでOK)
   - **Output Directory**: `dist` (そのままでOK)
5. "**Deploy**" ボタンをクリックします。

数分待つとデプロイが完了し、公開URLが表示されます。
