import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Dashboard = () => {
  return (
    <div className="title"> Dashboard
    <div className="PBI">
        <PowerBIEmbed

        embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: 'f0d0a5b3-1733-4f5f-89b7-1187dd259613',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f0d0a5b3-1733-4f5f-89b7-1187dd259613&groupId=f776b1a7-2b48-4f8c-a9fc-96d901d57a64&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d',
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZWU2NDVjNTItNGI4Zi00NjgwLWIwNmYtMmE4N2UzNjM2ZjI3LyIsImlhdCI6MTY1NjAzNzY3MSwibmJmIjoxNjU2MDM3NjcxLCJleHAiOjE2NTYwNDIyNDYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUEvUCswNVY3dlhnanJVczBEVlpMb0pleXQ1bEk2ajFuQzRHUUp4UnRlQXdmNUIrUXVJSC9lbEZDZ1dOSVFjNTQwU1YzeG1OTnd2cE9hemc4WDlNTHBxZklOcU5ndWhoSXRxaXJGNVUvcmRzTT0iLCJhbXIiOlsicHdkIiwicnNhIiwibWZhIl0sImFwcGlkIjoiMjNkOGY2YmQtMWViMC00Y2MyLWEwOGMtN2JmNTI1YzY3YmNkIiwiYXBwaWRhY3IiOiIwIiwiZGV2aWNlaWQiOiJjOGY3NTI0ZC02ZWQ1LTQ1N2EtOThkNi01OWVkODQ0NDgwMGUiLCJmYW1pbHlfbmFtZSI6IkVkYmVydCIsImdpdmVuX25hbWUiOiJTdGV2ZW4iLCJpcGFkZHIiOiIxMTguMjAwLjI1LjIzNyIsIm5hbWUiOiJTdGV2ZW4gRWRiZXJ0IFdpbmF0YSIsIm9pZCI6ImYwZDcwMzY5LTQxNDUtNDVhMy1iYzNkLTU0YTIzNTZjNWRkNSIsInB1aWQiOiIxMDAzMjAwMUZGRUUzRjU3IiwicmgiOiIwLkFWWUFVbHhrN285TGdFYXdieXFINDJOdkp3a0FBQUFBQUFBQXdBQUFBQUFBQUFCV0FQby4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBUZW5hbnQuUmVhZC5BbGwgVGVuYW50LlJlYWRXcml0ZS5BbGwgVXNlclN0YXRlLlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiengwRkp1djBXaklVRWUwNlJPRDhVLUNkWExNc1lmYWtLWHFTeUhPYTlMZyIsInRpZCI6ImVlNjQ1YzUyLTRiOGYtNDY4MC1iMDZmLTJhODdlMzYzNmYyNyIsInVuaXF1ZV9uYW1lIjoic3RldmVuLmVkYmVydEB2Zmxvd3RlY2guY29tIiwidXBuIjoic3RldmVuLmVkYmVydEB2Zmxvd3RlY2guY29tIiwidXRpIjoiRkQ5c2pUQXlHMDZobVZaREdjcTNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.NBPk51fdLA0SiyqDWamoaoLZaIvKfOYC0GmDcPFXbBnrLhSZQyaWr86rckOpvGu-N8gAHp3L284Buoxbo2LR-ppuYin0OOB4bR0DlBovUFSRr9VjZogeEHhcxl7vM28TLKgktT7nZGK1kHSy2ggSNu6p8gyHKdEnEqzmOq7OdJ7nWbylUvwwHdtlao5ZJUPwkC8PSVyXAHgRPjs7jFsMmpXPkjlXE87V2iTmhV9f2MCCGW_SMfLN6t1h8bkMG5mXY42yRLeLzyd-z6xK3qRczqaKXgovZuzRSA1pRuFwC1eu5MwUJ9QQJB2ENK3AT6-k_80VOFImH7hAwRH6-SH61w',
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}
            


        eventHandlers = {
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event.detail); }]
          ])
        }

        cssClassName = {"report-style-class"}


        getEmbeddedComponent = {(embeddedReport) => {
          window.report = embeddedReport;

        }}
          />
      </div>
    </div>
    );
};

export default Dashboard;
