import { AdminCrudTable } from "./SkillComponents/AdminCrud";
import { AiChatWidget } from "./SkillComponents/AiChat";
import { AnimatedHighlightedAreaChart } from "./SkillComponents/AnimatedChart";
import { AuthSignupContainer } from "./SkillComponents/AuthSignup";
import { CodeMetricsCard } from "./SkillComponents/CodeMetrics";
import { DeploymentStatusCard } from "./SkillComponents/DeploymentStatus";
import { DevStatusCard } from "./SkillComponents/DevSkillCard";
import { FileUploadManager } from "./SkillComponents/UploadFile";

const SkillsSection = () => {
  return (
    <>
      <div className="flex h-screen w-full items-start justify-center border border-red-500 mask-t-from-80% mask-b-from-60% mask-l-from-40% px-80 md:mask-r-from-80%">
        <div className="flex w-full items-center justify-center gap-6 border border-blue-400 mask-b-from-80% p-6">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            <DevStatusCard className="h-[34rem] border border-neutral-300 shadow-2xl" />
            <AnimatedHighlightedAreaChart className="z-20 w-[26rem] border border-neutral-300 shadow-2xl" />
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-x-3.5">
              <CodeMetricsCard className="border border-neutral-300 shadow-2xl" />
              <DeploymentStatusCard className="border border-neutral-300 shadow-2xl" />
            </div>
            <AdminCrudTable className="h-[34rem] w-[42rem] border border-neutral-300 shadow-2xl" />
            <FileUploadManager className="shadow-2xl" />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            <AiChatWidget className="border shadow-2xl" />
            <AuthSignupContainer className="w-[24rem] shadow-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
