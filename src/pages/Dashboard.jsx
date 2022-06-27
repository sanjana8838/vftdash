import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Dashboard = () => {
  return (
    <div className="title"> Dashboard
    <div className="PBI">
    
        <PowerBIEmbed

          embedConfig={{
            pageView: 'fitToWidth',
            type: 'dashboard',  // Supported types: report, dashboard, tile, visual and qna
            id: '36f8975b-932b-4091-b14a-60c007f92f50',
            embedUrl: 'https://app.powerbi.com/dashboardEmbed?dashboardId=36f8975b-932b-4091-b14a-60c007f92f50&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZWU2NDVjNTItNGI4Zi00NjgwLWIwNmYtMmE4N2UzNjM2ZjI3LyIsImlhdCI6MTY1NjA2MjM4MSwibmJmIjoxNjU2MDYyMzgxLCJleHAiOjE2NTYwNjY3MDIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUEyVmhGS2xuNTZscGpyVFlyZGY2dXp6bnVzRDRFMGpNc04vTUxaY3ZzNTZlSnhYWDlEcGdvblJRTlE3WmFGdG56UEhLalFDenVCMDk2SG9vblkzY05WVEdrUndITnVDZThUbWJsQU9IQ3BHcz0iLCJhbXIiOlsicHdkIiwicnNhIiwibWZhIl0sImFwcGlkIjoiMjNkOGY2YmQtMWViMC00Y2MyLWEwOGMtN2JmNTI1YzY3YmNkIiwiYXBwaWRhY3IiOiIwIiwiZGV2aWNlaWQiOiJjOGY3NTI0ZC02ZWQ1LTQ1N2EtOThkNi01OWVkODQ0NDgwMGUiLCJmYW1pbHlfbmFtZSI6IkVkYmVydCIsImdpdmVuX25hbWUiOiJTdGV2ZW4iLCJpcGFkZHIiOiIxMTguMjAwLjI1LjIzNyIsIm5hbWUiOiJTdGV2ZW4gRWRiZXJ0IFdpbmF0YSIsIm9pZCI6ImYwZDcwMzY5LTQxNDUtNDVhMy1iYzNkLTU0YTIzNTZjNWRkNSIsInB1aWQiOiIxMDAzMjAwMUZGRUUzRjU3IiwicmgiOiIwLkFWWUFVbHhrN285TGdFYXdieXFINDJOdkp3a0FBQUFBQUFBQXdBQUFBQUFBQUFCV0FQby4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBUZW5hbnQuUmVhZC5BbGwgVGVuYW50LlJlYWRXcml0ZS5BbGwgVXNlclN0YXRlLlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiengwRkp1djBXaklVRWUwNlJPRDhVLUNkWExNc1lmYWtLWHFTeUhPYTlMZyIsInRpZCI6ImVlNjQ1YzUyLTRiOGYtNDY4MC1iMDZmLTJhODdlMzYzNmYyNyIsInVuaXF1ZV9uYW1lIjoic3RldmVuLmVkYmVydEB2Zmxvd3RlY2guY29tIiwidXBuIjoic3RldmVuLmVkYmVydEB2Zmxvd3RlY2guY29tIiwidXRpIjoiT2lKSU1RYXA3MDI4OGhIV1pVczhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.dM5LN1MXnHnU9OqWiM9kdLJU9WRccxO_2wmrUSbZJiFRUB4c-0Q-R3s1dKB0Z9eIy7SNeoy9nhLpo3PZV5PE5qLW846y19mq7A20N5hIqhW8ZJ8YaRJDfHzEQ_O6tfj47MXyW0qP32bDbw-btiaO2d9a2Mf-_3f_JfXmeLeGsZi0nx34GgeC2HfzrxW_jS1ZPdkej9lZe4CyVUTENim64EyeyyJOcB_iXte-2k4po7tdLVq6ENkLJDFTcuGTN-Pv6HGaXSElFcPxeX3fwtNvlmUaO4SKui3_hooAkjrcsHjgxnB_QfG7S1JBKD5-Fne2NYRbjDrYSX33gYt5OWk0Nw',
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



          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"dashboard-style-class"}


          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;

          }}
        />
      </div>
    </div>
    );
};

export default Dashboard;
