use std::fmt::Debug;

use async_trait::async_trait;
use chrono::{DateTime, Utc};
use juniper::{GraphQLObject, ID};

use crate::{
    juniper::relay,
    schema::{Context, Result},
};

#[derive(Debug, GraphQLObject)]
#[graphql(context = Context)]
pub struct JobRun {
    pub id: juniper::ID,
    pub job: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
    pub finished_at: Option<DateTime<Utc>>,
    pub exit_code: Option<i32>,
    pub stdout: String,
    pub stderr: String,
}

#[derive(Debug, GraphQLObject)]
pub struct JobStats {
    pub success: i32,
    pub failed: i32,
    pub pending: i32,
}

impl relay::NodeType for JobRun {
    type Cursor = String;

    fn cursor(&self) -> Self::Cursor {
        self.id.to_string()
    }

    fn connection_type_name() -> &'static str {
        "JobRunConnection"
    }

    fn edge_type_name() -> &'static str {
        "JobRunEdge"
    }
}

#[async_trait]
pub trait JobService: Send + Sync {
    async fn create_job_run(&self, name: String) -> Result<ID>;
    async fn update_job_stdout(&self, id: &ID, stdout: String) -> Result<()>;
    async fn update_job_stderr(&self, id: &ID, stderr: String) -> Result<()>;
    async fn complete_job_run(&self, id: &ID, exit_code: i32) -> Result<()>;
    async fn finalize_stale_job_runs(&self) -> Result<()>;

    async fn list_job_runs(
        &self,
        ids: Option<Vec<ID>>,
        jobs: Option<Vec<String>>,
        after: Option<String>,
        before: Option<String>,
        first: Option<usize>,
        last: Option<usize>,
    ) -> Result<Vec<JobRun>>;
    async fn compute_job_run_stats(&self, jobs: Option<Vec<String>>) -> Result<JobStats>;
}
