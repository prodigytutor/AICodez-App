import { auth, clerkClient } from "@clerk/nextjs/server";
import { UserDetails } from "../components/user-details";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { CodeSwitcher } from "../components/code-switcher";
import { LearnMore } from "../components/learn-more";
import { Footer } from "../components/footer";

import { DASHBOARD_CARDS } from "../consts/cards";
import Header from "../components/Header";

export default async function DashboardPage() {
  const { userId } = auth().protect();

  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;

  return (
    <>
        
              <div className="flex items-left gap-2">
                <OrganizationSwitcher
                  appearance={{
                    elements: {
                      organizationPreviewAvatarBox: "size-6",
                    },
                  }}
                />
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-6",
                    },
                  }}
                />

              </div>
              <LearnMore cards={DASHBOARD_CARDS} />
            {/* <UserDetails /> */}
          <div className="pt-[3.5rem]">
            <CodeSwitcher />
          </div>
     
    </>
  );
}
