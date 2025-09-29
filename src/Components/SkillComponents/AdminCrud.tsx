"use client";

import { useState, type SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Edit, Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn, type ClassNameProp } from "@/lib/utils";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User" | "Editor";
  status: "Active" | "Inactive" | "Pending";
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: "John ",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane ",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike ",
    email: "mike@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah ",
    email: "sarah@example.com",
    role: "User",
    status: "Pending",
  },
  {
    id: 5,
    name: "David ",
    email: "david@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 6,
    name: "Lisa ",
    email: "lisa@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 7,
    name: "Tom ",
    email: "tom@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Emma ",
    email: "emma@example.com",
    role: "User",
    status: "Active",
  },
];

export function AdminCrudTable({ className }: ClassNameProp) {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter users based on search term and role
  const filteredUsers = sampleUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user: User) => {
    console.log("Delete user:", user);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Editor":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "User":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Card className={cn("mx-auto w-full max-w-[31rem]", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">User Management</CardTitle>

        {/* Search and Filter Controls */}
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="h-8 pl-10 text-sm"
            />
          </div>
          <Select
            value={roleFilter}
            onValueChange={(value: SetStateAction<string>) => {
              setRoleFilter(value);
              setCurrentPage(1); // Reset to first page when filtering
            }}
          >
            <SelectTrigger className="h-8 w-full text-sm sm:w-32">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Editor">Editor</SelectItem>
              <SelectItem value="User">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b">
                <th className="p-2 text-left text-xs font-semibold">ID</th>
                <th className="p-2 text-left text-xs font-semibold">Name</th>
                <th className="p-2 text-left text-xs font-semibold">Email</th>
                <th className="p-2 text-left text-xs font-semibold">Role</th>
                <th className="p-2 text-left text-xs font-semibold">Status</th>
                <th className="p-2 text-right text-xs font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-muted/30 border-b transition-colors duration-150"
                >
                  <td className="text-muted-foreground p-2 text-xs font-medium">
                    #{user.id}
                  </td>
                  <td className="p-2 text-xs font-medium">{user.name}</td>
                  <td className="text-muted-foreground p-2 text-xs">
                    {user.email}
                  </td>
                  <td className="p-2">
                    <Badge
                      variant="secondary"
                      className={`${getRoleColor(user.role)} px-1 py-0 text-xs`}
                    >
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-2">
                    <Badge
                      variant="secondary"
                      className={`${getStatusColor(user.status)} px-1 py-0 text-xs`}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(user)}
                        className="h-6 w-6 p-0 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(user)}
                        className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {paginatedUsers.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-muted-foreground text-sm">
              No users found matching your criteria.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between border-t pt-3">
            <p className="text-muted-foreground text-xs">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
              {filteredUsers.length} results
            </p>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="h-6 w-6 p-0"
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <span className="bg-muted rounded px-2 py-1 text-xs font-medium">
                {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="h-6 w-6 p-0"
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
